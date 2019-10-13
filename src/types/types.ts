export type RecordedEvent = {
  type: String,
  frameId: Number,
}

export type EventData = RecordedEvent[];

export type RecordedBlock = String;

export type BlockData = RecordedBlock[];

export type EventAction = {
  type: String,
  payload?: RecordedEvent,
}

export type RecAction =
  | 'startRec'
  | 'stopRec'
  | 'resetRec';

export type ParsedEvent = {
  selector: String,
  action: String,
  id: String,
};

export type RecordedSession = {
  sender?: chrome.runtime.MessageSender,
  events: any[],
};
