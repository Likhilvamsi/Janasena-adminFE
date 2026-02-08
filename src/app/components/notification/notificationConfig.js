export const NOTIFICATION_TYPES = {
  ANNOUNCEMENT: 'announcement',
  NOMINATION: 'nomination',
  RESULT: 'result',
}

export const notificationStyles = {
  announcement: {
    label: 'Election Announcement',
    badge: 'text-[#0da2e7] bg-[#0da2e71a] text-[10px] border-[#0da2e733]',
  },
  nomination: {
    label: 'Nominations Open',
    badge: 'bg-[#f59f0a1a] text-[#f59f0a]  border-[#f59f0a33]',
  },
  result: {
    label: 'Results Published',
    badge: 'bg-[#1a994833] text-[#1a9948] border-[#1a994833]',
  },
}
