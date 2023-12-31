export interface Task {
  task_id: number;
  task_name: string;
  task_description: string;
  task_priority: string;
  task_due_date: string;
  task_duration_days: number;
  task_duration_hours: number;
  task_duration_minutes: number;
  task_status: string;
  user_id: number;
  category_name?: string;
}

export interface Event {
  event_id: number;
  day: string;
  subject: string;
  starts: string;
  ends: string;
  user_id: number;
  category_name?: string;
}
