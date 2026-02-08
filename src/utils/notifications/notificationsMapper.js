export function mapNotificationToCard(n) {
  return {
    id: n.id,
    title: n.title,
    message: n.message,
    recipientsCount: n.recipients_count,
    sentAt: n.sent_at,
    sender: n.sender_name,
  }
}
