// Exercise 18: Event Scheduler
// Write a program for scheduling events using a Map. 
// Store event names as keys and event dates as values. 
// Implement functions to add events, remove events, and display upcoming events.

class EventScheduler {
  constructor() {
    this.events = new Map();
  }

  addEvent(eventName, eventDate) {
    this.events.set(eventName, eventDate);
  }

  removeEvent(eventName) {
    if (this.events.has(eventName)) {
      this.events.delete(eventName);
      console.log(`Event '${eventName}' removed.`);
    } else {
      console.log(`Event '${eventName}' not found.`);
    }
  }

  displayUpcomingEvents() {
    const currentDate = new Date();

    console.log("Upcoming Events:");
    for (const [eventName, eventDate] of this.events) {
      if (eventDate > currentDate) {
        console.log(`- ${eventName} (${eventDate.toDateString()})`);
      }
    }
  }
}

const eventScheduler = new EventScheduler();

eventScheduler.addEvent("Birthday Party", new Date("2023-09-15"));
eventScheduler.addEvent("Conference", new Date("2023-10-20"));
eventScheduler.addEvent("Workshop", new Date("2023-09-01"));

eventScheduler.displayUpcomingEvents();

eventScheduler.removeEvent("Workshop");
eventScheduler.displayUpcomingEvents();
