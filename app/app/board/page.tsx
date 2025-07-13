import { redirect } from 'next/navigation';

export default function BoardPage() {
  // Redirect to a default board
  redirect('/board/default-board');
}