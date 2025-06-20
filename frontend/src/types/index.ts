export type ControlMode = 'text' | 'train' | 'sequence' | 'clock' | 'stopwatch' | 'timer'; // Add timer mode

export interface MqttSettings {
  brokerUrl: string;
  publishTopic: string;
  subscribeTopic: string;
  username?: string;
  password?: string;
}

// Interface for a single line in a sequence
export interface SceneLine {
    id: string; // Unique ID for React keys
    text: string; // The 12-char text for the line
    durationMs?: number; // How long this line should be displayed (milliseconds)
}

// Interface for a full scene/sequence
export interface Scene {
    name: string;
    lines: SceneLine[];
    loop?: boolean; // Optional: Whether the sequence should loop
    // delayMs is removed, now part of SceneLine
}

// --- Add or Ensure Departure is Exported ---
// Define the structure for departure data (matching frontend/backend)
export interface Departure {
  id: string; // Unique identifier for the service
  scheduledTime: string; // e.g., "10:30"
  destination: string; // Destination name
  platform?: string; // Platform number (optional)
  status: string; // e.g., "On time", "Delayed", "Cancelled"
  estimatedTime?: string; // Estimated *departure* time if not on time (e.g., "10:42")
  destinationETA?: string; // Estimated *arrival* time at the 'to' station (optional)
}
// Interface for saved train route presets
export interface TrainRoutePreset {
    name: string; // User-defined name (e.g., "Home to Work")
    fromCRS: string; // 3-letter code
    toCRS?: string; // Optional 3-letter code
}
