import React, { Component } from "react"
import $ from "jquery"

export default class Roadmap extends Component {
  componentDidMount() {
    // Globals
    var prefixes =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
    var $timeline = $(".timeline")
    var $timelineItem = $(".timeline-item")
    var $timelineContent = $(".timeline-content")
    var $dropDown = $(".dropdown")
    var $hasHovered = true
    var hideOnExit = false

    // mouseenter event handler
    $timelineItem.on("mouseenter", function(e) {
      var isSelected = $(this).hasClass("selected")

      if (isSelected === false) {
        var leftPos = $(this).position().left,
          left = leftPos - 88,
          $that = $(this)

        $timelineItem.removeClass("selected")
        $(this).addClass("selected")

        if ($hasHovered === false) {
          // Show Bounce

          // Set Flag
          $hasHovered = true

          // Show DD Bounce
          showBounce(left)

          // Show DD content Bounce
          showContentBounce($that)
        } else {
          // Follow

          // Change pos of DD to follow
          dropDownFollow(left)

          // Hide previous dd content
          $timelineContent.removeClass("animated fadeIn bounceIn")

          // Show hovered dd content
          $that.find($timelineContent).addClass("animated fadeIn")
        }
      }
    })

    // mouseleave event handler
    $timeline.on("mouseleave", function(e) {
      if (hideOnExit) {
        //   Set Flag
        $hasHovered = false

        // Hide DD
        hideDropDown()

        // Hide DD content
        $timelineContent.removeClass("animated fadeIn")
      }
    })

    // Animation end event listener
    $dropDown.on(prefixes, function(e) {
      if (e.originalEvent.animationName === "fadeOut") {
        $dropDown.removeAttr("style")
      }
    })

    /**
     * Private functions that do showing/hiding/animating
     */
    function showContentBounce(that) {
      that.find(".timeline-content").addClass("animated bounceIn")
    }

    function showBounce(pos) {
      $dropDown
        .css("left", pos + "px")
        .removeClass("fadeOut")
        .addClass("animated bounceIn")
    }

    function dropDownFollow(pos) {
      $dropDown.css("left", pos + "px")
    }

    function hideDropDown() {
      $timelineItem.removeClass("selected")
      $dropDown.removeClass("bounceIn").addClass("fadeOut")
    }
  }

  render() {
    return (
      <div>
        <section>
          <div class="">
            <h1 class="text-center">From Start to Finish with ACME Software</h1>
            <div class="timeline flex-container">
              <div class="timeline-item flex-items-default selected">
                <div class="timeline-content text-left animated bounceIn">
                  <h2>2019 Q1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Provident eveniet nulla amet, sapiente voluptatum
                    praesentium.
                  </p>
                  <div class="hexagon"></div>
                  <i class="material-icons">explore</i>
                </div>
              </div>
              <div class="timeline-item flex-items-default">
                <div class="timeline-content text-left">
                  <h2>2019 Q2</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Provident eveniet nulla amet, sapiente voluptatum
                    praesentium.
                  </p>
                  <div class="hexagon"></div>
                  <i class="material-icons">border_style</i>
                </div>
              </div>
              <div class="timeline-item flex-items-default">
                <div class="timeline-content text-left">
                  <h2>2019 Q3</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Provident eveniet nulla amet, sapiente voluptatum
                    praesentium.
                  </p>
                  <div class="hexagon"></div>
                  <i class="material-icons">format_shapes</i>
                </div>
              </div>
              <div class="timeline-item flex-items-default">
                <div class="timeline-content text-left">
                  <h2>2019 Q4</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Provident eveniet nulla amet, sapiente voluptatum
                    praesentium.
                  </p>
                  <div class="hexagon"></div>
                  <i class="material-icons">rate_review</i>
                </div>
              </div>
              <div class="timeline-item flex-items-default">
                <div class="timeline-content text-left">
                  <h2>2020 Q1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Provident eveniet nulla amet, sapiente voluptatum
                    praesentium.
                  </p>
                  <div class="hexagon"></div>
                  <i class="material-icons">important_devices</i>
                </div>
              </div>

              <div class="dropdown animated bounceIn" style={{ left: "-88px" }}>
                <div class="inner">
                  <div class="arrow-down"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
