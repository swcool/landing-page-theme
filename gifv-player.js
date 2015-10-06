/*! GIFV Player - v0.2.0 - 2015-06-08
* Copyright (c) 2015 Globo.com; Licensed MIT */
function GifvPlayer() {
    'use strict';
    this.init.apply(this, arguments);
}

(function (window, $) {
    'use strict';

    var VideoController, GifController;

    VideoController = {
        play: function ($element) {
            var $video = $element.find('video');
            $video[0].play();
        },
        pause: function ($element) {
            var $video = $element.find('video');
            $video[0].pause();
        },
        isPaused: function ($element) {
            return $element.find('> video')[0].paused;
        }
    };

    GifController = {
        play: function ($element) {
            var $img = $element.find('img');
            $img.attr('src', $img.data('gifv-original'));
        },
        pause: function ($element) {
            var $img = $element.find('img');
            $img.attr('src', $img.data('gifv-poster'));
        },
        isPaused: function ($element) {
            return !$element.hasClass('gifv-player-playing');
        }
    };

    GifvPlayer.prototype = {
        selector: '.gifv-player',
        options: {
            autostart: true
        },
        init: function (options) {
            $.extend(this.options, options);
            this.videoSelector = this.selector + ' video';

            if (this.hasVideoSupport()) {
                this.controller = VideoController;
            } else {
                this.controller = GifController;
                this.storeOriginalSource();
            }

            this.bindEvents();
            this.hideVideoElements();
        },
        destroy: function () {
            $(document).off('.gifv').removeData('gifv-current');
            $(this.videoSelector).off('.gifv');
        },
        hideVideoElements: function () {
            $(this.videoSelector).hide();
        },
        storeOriginalSource: function () {
            $('img', this.selector).each(function () {
                var $this = $(this);
                $this.data('gifv-poster', $this.attr('src'));
            });
        },
        bindEvents: function () {
            var player = this;

            /*
            $(document).on('click.gifv', this.selector, function (event) {
                event.preventDefault();

                var $player = $(this);
                player.playPause($player);

                return true;
            });

            if (this.options.autostart) {
                $(document).on('mouseenter.gifv', this.selector, function (event) {
                    event.preventDefault();

                    var $player = $(this);
                    player.play($player);
                });
            }*/

            $(this.videoSelector).on('play.gifv', function () {
                player.hidePoster($(this).parents(player.selector));
            });

            $(this.videoSelector).on('webkitendfullscreen.gifv', function () {
                var $video = $(this).parents(player.selector);
                // Show poster to avoid the native iOS play icon
                player.showPoster($video);
                // Hide the video to avoid click in the image being captured
                $video.find('video').hide();
                // Update player state after "OK" button on iOS Safari
                player.pause($video);
            });
        },
        showPoster: function ($video) {
            $video.eq(0).find('img').css('visibility', 'visible');
        },
        hidePoster: function ($video) {
            $video.eq(0).find('img').css('visibility', 'hidden');
        },
        playPause: function ($video) {
            if (this.isPaused($video)) {
                this.play($video);
            } else {
                this.pause($video);
            }
        },
        play: function ($video) {
            var $currentVideo = $(document).data('gifv-current');
            if ($currentVideo) {
                this.pause($currentVideo);
            }

            $(document).data('gifv-current', $video);
            $video.addClass('gifv-player-playing');
            $video.find('video').show();

            this.controller.play($video);
        },
        pause: function ($video) {
            $(document).removeData('gifv-current');
            $video.removeClass('gifv-player-playing');

            this.controller.pause($video);
        },
        isPaused: function ($element) {
            return this.controller.isPaused($element);
        },
        hasVideoSupport: function () {
            var testVideo = document.createElement('video');
            return (
                !!testVideo.canPlayType && (
                    (testVideo.canPlayType('video/mp4') !== '') || (testVideo.canPlayType('video/webm') !== '')
                )
            );
        }
    };

}(this, jQuery));
