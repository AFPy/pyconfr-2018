(function(global, moment) {
  "use strict";

  window.addEventListener('DOMContentLoaded', init, {once: true});

  var TIME_SLICE = 5 // minutes
  var SLOT_DURATION = 30 // minutes
  var config = {
    programmeUrl: "https://cfp.pycon.fr/schedule/xml/",
    ponyConfUrl: "https://cfp.pycon.fr",
  }

  function getChildText(parent, elemTagName) {
    return parent.getElementsByTagName(elemTagName)[0].textContent
  }

  // the time unit used is the number of TIME_SLICE since the beginning of the day
  function timeStrToInt(timeStr) {
    var startSplit = timeStr.split(':')
    return parseInt(startSplit[0]) * 60 / TIME_SLICE + parseInt(startSplit[1]) / TIME_SLICE
  }

  function timeIntToStr(timeInt) {
    var hours = Math.floor(timeInt / 60 * TIME_SLICE)
    hours = (hours < 10) ? '0' + hours.toString() : hours.toString()
    var minutes = (timeInt % (60 / TIME_SLICE)) * TIME_SLICE
    minutes = (minutes < 10) ? '0' + minutes.toString() : minutes.toString()
    return hours + ':' + minutes
  }

  function convertDateStrToHumanDateStr(dateStr) {
    moment.locale('fr')
    var humanDate = moment(dateStr, 'YYYY-MM-DD').format('dddd DD MMMM')
    return humanDate.substring(0, 1).toUpperCase() + humanDate.substr(1)
  }

  function fetchProgram(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      callback(xhr.responseXML);
    }
    xhr.onerror = function() {
      console.error("Error while getting program XML.", xhr.status, xhr.statusText);
    }
    xhr.open("GET", config.programmeUrl);
    xhr.responseType = "document";
    xhr.send();
  }

  function renderEventCell(event, rowSpan, colSpan) {
    var room = ''
    var typeClass = 'event-type-'
    switch (event.type) {
      case 'conference': typeClass += 'conference'; break
      case 'atelier': typeClass += 'atelier'; break
      case 'keynote': typeClass += 'keynote'; room = '<div class="event-room">' + event.room + '</div>'; break
    }
    return '<td ' +
      'id="' + event.slug + '" ' +
      'rowspan="' + rowSpan + '" ' +
      'colspan="' + colSpan + '" ' +
      'class="event ' + typeClass + '" ' +
      'tabindex="0" ' +
      'data-event-id="' + event.id + '"' +
      '>' +
      '<div class="event-title">'+ event.title +'</div>' +
      '<div class="event-persons">' + event.persons.join(', ') + '</div>' +
      room +
    '</td>'
  }

  function renderEventDiv(event) {
    var room = ''
    var typeClass = 'event-type-'
    switch (event.type) {
      case 'conference': typeClass += 'conference'; break
      case 'atelier': typeClass += 'atelier'; break
      case 'keynote': typeClass += 'keynote'; room = '<div class="event-room">' + event.room + '</div>'; break
    }
    return '<div ' +
      'id="' + event.slug + '" ' +
      'class="event ' + typeClass + '" ' +
      'tabindex="0" ' +
      'data-event-id="' + event.id + '"' +
      '>' +
      '<div class="event-title">'+ event.title +'</div>' +
      '<div class="event-persons">' + event.persons.join(', ') + '</div>' +
      room +
    '</div>'
  }

  function createProgramTables(programXML) {
    var programmeContainer = document.getElementById('program')
    programmeContainer.innerHTML = '' // we remove the loader

    var days = new Map()
    var rooms = new Set()
    var events = []

    var dayElems = Array.prototype.slice.call(programXML.getElementsByTagName('day'))
    dayElems.forEach(function(dayElem) {
      var dayIndex = parseInt(dayElem.getAttribute('index'))
      var dayDate = dayElem.getAttribute('date')
      var dayInfo = { date: dayDate, start: 23 * (60 / TIME_SLICE), end: 0 }
      days.set(dayIndex, dayInfo)

      var roomElems = Array.prototype.slice.call(dayElem.children)
      roomElems = roomElems.filter(function(r) { return r.nodeName === 'room' })
      roomElems.forEach(function(roomElem) {
        var roomName = roomElem.getAttribute('name')
        rooms.add(roomName)
      })

      var eventElems = Array.prototype.slice.call(dayElem.getElementsByTagName('event'))
      eventElems.forEach(function(eventElem) {
        try {
          var start = timeStrToInt(getChildText(eventElem, 'start'))
          var duration = timeStrToInt(getChildText(eventElem, 'duration'))
          if (dayInfo.start > start) {
            dayInfo.start = start
          }
          if (dayInfo.end < (start+duration)) {
            dayInfo.end = start+duration
          }

          var event = {
            day: dayIndex,
            date: dayDate,
            id: parseInt(eventElem.getAttribute('id')),
            start: start,
            duration: duration,
            room: getChildText(eventElem, 'room'),
            slug: getChildText(eventElem, 'slug'),
            title: getChildText(eventElem, 'title'),
            subtitle: getChildText(eventElem, 'subtitle'),
            track: getChildText(eventElem, 'track'),
            type: getChildText(eventElem, 'type'),
            language: getChildText(eventElem, 'language'),
            description: getChildText(eventElem, 'description'),
          }
          event.persons = Array.prototype.slice.call(eventElem.getElementsByTagName('person')).map(function(personElem) {
            return personElem.textContent
          })
          var linkElems = Array.prototype.slice.call(eventElem.getElementsByTagName('link'))
          event.links = []
          linkElems.forEach(function(linkElem) {
            if (linkElem.getAttribute('tag') === 'registration') {
              event.registrationLink = linkElem.textContent
              return
            }
            if (linkElem.getAttribute('tag') === 'video') {
              event.videoLink = linkElem.textContent
              return
            }
            event.links.push(linkElem.textContent)
          })
          if (
            eventElem.getElementsByTagName('attendees_max').length > 0 &&
            eventElem.getElementsByTagName('attendees_remain').length > 0
          ) {
            event.attendees_max = parseInt(getChildText(eventElem, 'attendees_max'))
            event.attendees_remain = parseInt(getChildText(eventElem, 'attendees_remain'))
          }
          // console.log("Event", start, duration, dayInfo.end, event.title)
          events.push(event)
        } catch (e) {
          console.error("Error while parsing event", eventElem, e)
        }
      })
    })
    // console.log("Events", events, days)

    var roomsArray = []
    rooms.forEach(function(r) { roomsArray.push(r) })
    var roomsHeader = roomsArray.reduce(function(acc, room) { acc += '<th class="header-room">' + room +'</th>'; return acc }, '')


    days.forEach(function(dayInfo, dayIndex) {
      var rows = ''
      var timeByRooms = new Map(roomsArray.map(function(r) { return [r, dayInfo.start]} ))
      var lastKeynoteEnd = dayInfo.start
      for (var idx = dayInfo.start; idx < dayInfo.end; idx++) {
        var row = '<tr>'
        if ((idx * TIME_SLICE) % SLOT_DURATION === 0) {
          var rowSpan = SLOT_DURATION / TIME_SLICE
          var slotEndTime = idx+SLOT_DURATION/TIME_SLICE
          row += '<td rowspan="' + rowSpan + '" class="time-cell">' +
            '<div class="slot-times-container">' +
              '<div class="slot-times">' +
                '<div class="time-slot-start">' + timeIntToStr(idx) + '</div>' +
                '<div class="time-slot-middle"> – </div>' +
                '<div class="time-slot-end">' + timeIntToStr(slotEndTime) + '</div>' +
              '</div>' +
            '</div>' +
            '</td>'
          var keynoteEvent = events.find(function(e) { return e.day === dayIndex && e.start === idx && e.type === 'keynote' })
          if (keynoteEvent) {
            lastKeynoteEnd = keynoteEvent.start + keynoteEvent.duration
          }
          roomsArray.forEach(function(room, roomIdx) {
            var lastCellEndTime = timeByRooms.get(room)
            var event = events.find(function(e) { return e.day === dayIndex && e.start === idx && e.room === room && e.type !== 'keynote' })
            if (event) {
              if (event.start < lastCellEndTime) {
                console.error("Two events are one the same room at the same time", room, event)
              }
              timeByRooms.set(room, event.start + event.duration)
              row += renderEventCell(event, event.duration, 1)
            } else {
              if (lastCellEndTime <= idx || (lastCellEndTime > idx && lastCellEndTime < slotEndTime)) {
                if (keynoteEvent) {
                  var id = (keynoteEvent && roomIdx === 0) ? 'id="keynote' + keynoteEvent.id + '"' : ''
                  row += '<td ' + id + ' rowspan="' + (slotEndTime - lastCellEndTime) + '" class="keynote-slot" data-duration="' + keynoteEvent.duration + '"></td>'
                } else if (idx < lastKeynoteEnd) {
                  row += '<td rowspan="' + (slotEndTime - lastCellEndTime) + '" class="keynote-slot"></td>'
                } else {
                  row += '<td rowspan="' + (slotEndTime - lastCellEndTime) + '" class="empty-slot"></td>'
                }
                timeByRooms.set(room, slotEndTime)
              }
            }
          })
        }
        row += '</tr>'
        rows += row
      }

      programmeContainer.insertAdjacentHTML('beforeend',
          '<div id="day' + dayIndex + '" class="day-container">' +
          '<h2 class="text-center">' + convertDateStrToHumanDateStr(dayInfo.date) +'</h2>' +
          '<table id="table' + dayIndex + '" class="table table-bordered program-table">' +
          '<thead>' +
          '<tr>' +
          '<th class="slot-times-header"></th>' + // the hours column
          roomsHeader +
          '</tr>' +
          '</thead>' +
          '<tbody>' +
          rows +
          '</tbody>' +
          '</table>' +
          '</div>'
      )

      // we draw the keynotes
      var keynoteEvents = events.filter(function(e) { return e.day === dayIndex && e.type === 'keynote' })
      keynoteEvents.forEach(function(event) {
        var firstKeynoteCell = document.getElementById('keynote'+event.id)
        if (firstKeynoteCell) {
          var duration = parseInt(firstKeynoteCell.dataset.duration)
          var firstKeynoteRow = firstKeynoteCell.parentElement
          var lastKeynoteRow = firstKeynoteRow
          for (var i = 1; i < duration; i++) {
            lastKeynoteRow = lastKeynoteRow.nextSibling
          }
          var keynoteCells = Array.prototype.slice.call(firstKeynoteRow.getElementsByClassName('keynote-slot'))
          var lastKeynoteCell = keynoteCells[keynoteCells.length - 1]
          var width = lastKeynoteCell.getBoundingClientRect().right - firstKeynoteCell.getBoundingClientRect().left
          var height = lastKeynoteRow.getBoundingClientRect().bottom - firstKeynoteRow.getBoundingClientRect().top
          firstKeynoteCell.insertAdjacentHTML('beforeend',
              '<div style="position: relative;">' +
              '  <div style="border: solid 1px #dddddd;position: absolute;width: ' + width + 'px;height: ' + height + 'px">' +
              renderEventDiv(event) +
              '  </div>' +
              '</div>'
          )
        }
      })
    })

    // Setup the event system to show the modal with the event details
    $('.event').on('click keydown', function(domEvent) {
      if (domEvent.type === 'keydown' && (domEvent.key !== " " && domEvent.key !== "Enter")) return
      var eventId = parseInt(this.dataset.eventId)
      var event = events.find(function(e) { return e.id === eventId })
      if (!event) {
        console.error("Could found event with id", eventId)
        return
      }
      window.location.hash = event.slug
      showEventDetailsModal(event)
    })

    // open the event details modal if there is an event slug with the URL hash
    if (window.location.hash !== '') {
      var eventSlug = window.location.hash.substring(1) // remove the #
      var event = events.find(function(e) { return e.slug === eventSlug })
      if (event) {
        showEventDetailsModal(event)
        var eventElem = document.getElementById(event.slug)
        if (eventElem) {
          eventElem.scrollIntoView();
        }
      }
    }
  }

  function showEventDetailsModal(event) {
    var modal = $('#event-details-modal')

    modal.find('.event-title').text(event.title)
    modal.find('.event-persons').text(event.persons.join(', '))
    modal.find('.event-track').text(event.track)
    modal.find('.event-time').text(convertDateStrToHumanDateStr(event.date) + ' ' + timeIntToStr(event.start) + ' – ' + timeIntToStr(event.start + event.duration))
    modal.find('.event-room').text(event.room)
    var type = ''
    switch (event.type) {
      case 'conference': type = 'Conférence'; break
      case 'atelier': type = 'Atelier'; break
      case 'keynote': type = 'Keynote'; break
    }
    modal.find('.event-type').text(type)
    if (event.registrationLink) {
      if (event.attendees_max === 0 || event.attendees_remain > 0) {
        modal.find('.event-registration').html(
          '<a href="' + config.ponyConfUrl + event.registrationLink + '">Inscription obligatoire pour cet atelier</a> ('+event.attendees_remain+' places de libre sur ' +event.attendees_max+ ')'
        )
      } else {
        modal.find('.event-registration').html(
          '<strong>Il ne reste malheureusement plus de place pour cet atelier.</strong>'
        )
      }
    } else {
      modal.find('.event-registration').text('')
    }
    modal.find('.event-abstract').text(event.abstract)
    modal.find('.event-description').text(event.description)

    // Add Video if link exists
    if (event.videoLink) {
      modal.find('.event-video').html(
        '<video width="360" height="200" controls="controls">' +
        '<source src="' +
        event.videoLink +
        '" type="video/mp4"/>' +
        '</video>'
      );
      modal.on('hide.bs.modal', function(event) {
        var v = modal.find("video").get(0);
        v.pause();
      })
    } else {
      modal.find('.event-video').text('');
      modal.unbind('hide.bs.modal');
    }

    modal.modal('show')
  }

  function init() {
    fetchProgram(createProgramTables)
  }

})(window, window.moment)
