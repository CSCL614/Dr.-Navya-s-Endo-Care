export interface DaySchedule {
  dayName: string;
  shortName: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
  openHour: number; // 24-hr format
  openMinute: number;
  closeHour: number; // 24-hr format
  closeMinute: number;
  displayHours: string;
}

export const CLINIC_SCHEDULE: Record<number, DaySchedule> = {
  0: {
    dayName: "Sunday",
    shortName: "Sun",
    isOpen: true,
    openTime: "11:00 AM",
    closeTime: "2:00 PM",
    openHour: 11,
    openMinute: 0,
    closeHour: 14,
    closeMinute: 0,
    displayHours: "11:00 AM – 2:00 PM",
  },
  1: {
    dayName: "Monday",
    shortName: "Mon",
    isOpen: true,
    openTime: "10:00 AM",
    closeTime: "6:00 PM",
    openHour: 10,
    openMinute: 0,
    closeHour: 18,
    closeMinute: 0,
    displayHours: "10:00 AM – 6:00 PM",
  },
  2: {
    dayName: "Tuesday",
    shortName: "Tue",
    isOpen: true,
    openTime: "2:00 PM",
    closeTime: "6:00 PM",
    openHour: 14,
    openMinute: 0,
    closeHour: 18,
    closeMinute: 0,
    displayHours: "2:00 PM – 6:00 PM",
  },
  3: {
    dayName: "Wednesday",
    shortName: "Wed",
    isOpen: true,
    openTime: "10:00 AM",
    closeTime: "6:00 PM",
    openHour: 10,
    openMinute: 0,
    closeHour: 18,
    closeMinute: 0,
    displayHours: "10:00 AM – 6:00 PM",
  },
  4: {
    dayName: "Thursday",
    shortName: "Thu",
    isOpen: true,
    openTime: "10:00 AM",
    closeTime: "6:00 PM",
    openHour: 10,
    openMinute: 0,
    closeHour: 18,
    closeMinute: 0,
    displayHours: "10:00 AM – 6:00 PM",
  },
  5: {
    dayName: "Friday",
    shortName: "Fri",
    isOpen: true,
    openTime: "10:00 AM",
    closeTime: "6:00 PM",
    openHour: 10,
    openMinute: 0,
    closeHour: 18,
    closeMinute: 0,
    displayHours: "10:00 AM – 6:00 PM",
  },
  6: {
    dayName: "Saturday",
    shortName: "Sat",
    isOpen: true,
    openTime: "10:00 AM",
    closeTime: "6:00 PM",
    openHour: 10,
    openMinute: 0,
    closeHour: 18,
    closeMinute: 0,
    displayHours: "10:00 AM – 6:00 PM",
  },
};

export interface ClinicStatus {
  isOpen: boolean;
  statusLabel: string;
  badgeText: string;
  todayHours: string;
  subText: string;
  dayIndex: number;
  dayName: string;
}

export function getClinicStatus(date: Date = new Date()): ClinicStatus {
  // Convert current time to Asia/Kolkata (IST: UTC + 5:30)
  const istDateString = date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const istDate = new Date(istDateString);

  const dayIndex = istDate.getDay();
  const currentHour = istDate.getHours();
  const currentMinute = istDate.getMinutes();
  const currentTotalMinutes = currentHour * 60 + currentMinute;

  const today = CLINIC_SCHEDULE[dayIndex];
  const openTotalMinutes = today.openHour * 60 + today.openMinute;
  const closeTotalMinutes = today.closeHour * 60 + today.closeMinute;

  const isOpen = currentTotalMinutes >= openTotalMinutes && currentTotalMinutes < closeTotalMinutes;

  let subText = "";
  if (isOpen) {
    subText = `Open until ${today.closeTime}`;
  } else if (currentTotalMinutes < openTotalMinutes) {
    subText = `Opens today at ${today.openTime}`;
  } else {
    // Tomorrow's hours
    const nextDayIndex = (dayIndex + 1) % 7;
    const tomorrow = CLINIC_SCHEDULE[nextDayIndex];
    subText = `Opens tomorrow at ${tomorrow.openTime}`;
  }

  return {
    isOpen,
    statusLabel: isOpen ? "Open Now" : "Closed Now",
    badgeText: isOpen ? "Open Today" : "Closed Now",
    todayHours: today.displayHours,
    subText,
    dayIndex,
    dayName: today.dayName,
  };
}
