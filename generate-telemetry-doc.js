const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle, convertInchesToTwip } = require('docx');

const createTelemetryAggregationDoc = () => {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                // Title
                new Paragraph({
                    text: "TELEMETRY AGGREGATION: EVENTS TO DERIVED STATUSES",
                    heading: HeadingLevel.TITLE,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 400 }
                }),

                // Overview
                new Paragraph({
                    text: "Overview",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),
                new Paragraph({
                    text: "The Telemetry Aggregation System in the tutor-dashboard platform tracks learner behavior and automatically derives engagement insights. This document explains the complete journey from raw telemetry events to derived statuses like Attention Drift, Content Friction, and Engaged.",
                    spacing: { after: 300 }
                }),

                // System Architecture
                new Paragraph({
                    text: "System Architecture",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),
                new Paragraph({
                    text: "Data Flow Pipeline:",
                    spacing: { after: 100 }
                }),
                new Paragraph({ text: "1. Learner Actions → Frontend Event Recording", spacing: { after: 80 } }),
                new Paragraph({ text: "2. Event Buffer → Batch Accumulation", spacing: { after: 80 } }),
                new Paragraph({ text: "3. HTTP POST → Backend Transmission", spacing: { after: 80 } }),
                new Paragraph({ text: "4. Event Classification → Status Derivation", spacing: { after: 80 } }),
                new Paragraph({ text: "5. Database Storage → Persistent Records", spacing: { after: 80 } }),
                new Paragraph({ text: "6. Tutor Dashboard Query → Aggregated Display", spacing: { after: 300 } }),

                // Complete Data Flow
                new Paragraph({
                    text: "Complete Data Flow",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),

                // 1. Event Generation
                new Paragraph({
                    text: "1. Event Generation (Frontend)",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 100 }
                }),
                new Paragraph({
                    text: "Location: Frontend application (learner-facing pages)",
                    spacing: { after: 80 }
                }),
                new Paragraph({
                    text: "Trigger Events:",
                    spacing: { after: 80 }
                }),
                new Paragraph({ text: "• Video play/pause/buffering", spacing: { after: 60 } }),
                new Paragraph({ text: "• Page views", spacing: { after: 60 } }),
                new Paragraph({ text: "• Quiz attempts", spacing: { after: 60 } }),
                new Paragraph({ text: "• Chat messages", spacing: { after: 60 } }),
                new Paragraph({ text: "• Idle detection", spacing: { after: 60 } }),
                new Paragraph({ text: "• Content navigation", spacing: { after: 200 } }),

                new Paragraph({
                    text: "Event Structure:",
                    spacing: { after: 80 }
                }),
                new Paragraph({ text: "• courseId: Course UUID", spacing: { after: 60 } }),
                new Paragraph({ text: "• moduleNo: Module number (optional)", spacing: { after: 60 } }),
                new Paragraph({ text: "• topicId: Topic UUID (optional)", spacing: { after: 60 } }),
                new Paragraph({ text: "• eventType: Event identifier (e.g., 'video.play')", spacing: { after: 60 } }),
                new Paragraph({ text: "• payload: Additional data (optional)", spacing: { after: 60 } }),
                new Paragraph({ text: "• occurredAt: ISO timestamp", spacing: { after: 300 } }),

                // 2. Event Buffering
                new Paragraph({
                    text: "2. Event Buffering (Frontend)",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 100 }
                }),
                new Paragraph({
                    text: "Location: frontend-tutor/src/utils/telemetry.ts",
                    spacing: { after: 80 }
                }),
                new Paragraph({
                    text: "Purpose: Batch events to reduce HTTP requests and improve performance",
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: "Buffer Configuration:",
                    spacing: { after: 80 }
                }),
                new Paragraph({ text: "• Maximum buffer size: 20 events", spacing: { after: 60 } }),
                new Paragraph({ text: "• Flush interval: 4 seconds", spacing: { after: 60 } }),
                new Paragraph({ text: "• Authentication-aware: Requires JWT token", spacing: { after: 60 } }),
                new Paragraph({ text: "• Browser-only: Skips buffering in SSR", spacing: { after: 300 } }),

                // 3. Event Transmission
                new Paragraph({
                    text: "3. Event Transmission (Frontend → Backend)",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 100 }
                }),
                new Paragraph({
                    text: "Endpoint: POST /api/activity/events",
                    spacing: { after: 80 }
                }),
                new Paragraph({
                    text: "Authentication: JWT Bearer token in Authorization header",
                    spacing: { after: 80 }
                }),
                new Paragraph({
                    text: "Request Format: Batched array of events with timestamps",
                    spacing: { after: 300 }
                }),

                // 4. Event Classification
                new Paragraph({
                    text: "4. Event Classification (Backend)",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),
                new Paragraph({
                    text: "Location: backend-tutor/src/services/activityEventService.ts",
                    spacing: { after: 80 }
                }),
                new Paragraph({
                    text: "Purpose: Transform raw event types into meaningful engagement statuses",
                    spacing: { after: 200 }
                }),

                // Classification Table
                new Paragraph({
                    text: "Event Classification Rules",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 100 }
                }),

                // Attention Drift Table
                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ text: "Derived Status", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Event Prefixes", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Interpretation", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ text: "Attention Drift", bold: true })]
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({ text: "• idle.*" }),
                                        new Paragraph({ text: "• video.pause" }),
                                        new Paragraph({ text: "• video.buffer.start" }),
                                        new Paragraph({ text: "• lesson.locked_click" })
                                    ]
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Learner is distracted, inactive, or experiencing technical issues" })]
                                })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ text: "Content Friction", bold: true })]
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({ text: "• quiz.fail" }),
                                        new Paragraph({ text: "• quiz.retry" }),
                                        new Paragraph({ text: "• tutor.prompt" }),
                                        new Paragraph({ text: "• cold_call.star" }),
                                        new Paragraph({ text: "• tutor.response_received" })
                                    ]
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Learner is struggling with content, needs assistance" })]
                                })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ text: "Engaged", bold: true })]
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({ text: "• video.play" }),
                                        new Paragraph({ text: "• video.resume" }),
                                        new Paragraph({ text: "• progress.snapshot" }),
                                        new Paragraph({ text: "• notes.*" }),
                                        new Paragraph({ text: "• lesson.*" })
                                    ]
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Learner is actively learning and progressing" })]
                                })
                            ]
                        })
                    ]
                }),

                new Paragraph({ text: "", spacing: { after: 300 } }),

                // Classification Logic
                new Paragraph({
                    text: "Classification Logic",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 100 }
                }),
                new Paragraph({
                    text: "The system uses prefix matching to categorize events:",
                    spacing: { after: 100 }
                }),
                new Paragraph({ text: "1. Normalize event type to lowercase", spacing: { after: 80 } }),
                new Paragraph({ text: "2. Check if event starts with any attention drift prefix", spacing: { after: 80 } }),
                new Paragraph({ text: "3. If not, check if event starts with content friction prefix", spacing: { after: 80 } }),
                new Paragraph({ text: "4. If not, check if event starts with engaged prefix", spacing: { after: 80 } }),
                new Paragraph({ text: "5. Return derived status and reason", spacing: { after: 300 } }),

                // 5. Database Storage
                new Paragraph({
                    text: "5. Database Storage",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),
                new Paragraph({
                    text: "Table: learner_activity_events",
                    spacing: { after: 100 }
                }),

                // Database Schema Table
                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ text: "Column", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Type", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Description", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "eventId" })] }),
                                new TableCell({ children: [new Paragraph({ text: "UUID" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Primary key" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "userId" })] }),
                                new TableCell({ children: [new Paragraph({ text: "UUID" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Foreign key to users" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "courseId" })] }),
                                new TableCell({ children: [new Paragraph({ text: "UUID" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Foreign key to courses" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "eventType" })] }),
                                new TableCell({ children: [new Paragraph({ text: "String" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Original event type (e.g., 'video.play')" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "derivedStatus" })] }),
                                new TableCell({ children: [new Paragraph({ text: "String" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Classified status: engaged, attention_drift, content_friction" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "statusReason" })] }),
                                new TableCell({ children: [new Paragraph({ text: "String" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Human-readable explanation" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "payload" })] }),
                                new TableCell({ children: [new Paragraph({ text: "JSON" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Additional event data" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "createdAt" })] }),
                                new TableCell({ children: [new Paragraph({ text: "DateTime" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Event timestamp" })] })
                            ]
                        })
                    ]
                }),

                new Paragraph({ text: "", spacing: { after: 300 } }),

                // 6. Status Aggregation
                new Paragraph({
                    text: "6. Status Aggregation for Tutor Dashboard",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),
                new Paragraph({
                    text: "Purpose: Determine the most important derived status for each learner",
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: "Priority System:",
                    spacing: { after: 80 }
                }),
                new Paragraph({ text: "1. Content Friction (Highest Priority) - Learner needs help", spacing: { after: 80 } }),
                new Paragraph({ text: "2. Attention Drift (Medium Priority) - Learner is disengaged", spacing: { after: 80 } }),
                new Paragraph({ text: "3. Engaged (Lowest Priority) - Learner is progressing normally", spacing: { after: 200 } }),

                new Paragraph({
                    text: "Aggregation Process:",
                    spacing: { after: 80 }
                }),
                new Paragraph({ text: "1. Query last 20 events per learner", spacing: { after: 80 } }),
                new Paragraph({ text: "2. Group events by user ID", spacing: { after: 80 } }),
                new Paragraph({ text: "3. Search for content friction events first", spacing: { after: 80 } }),
                new Paragraph({ text: "4. If none, search for attention drift events", spacing: { after: 80 } }),
                new Paragraph({ text: "5. If none, search for engaged events", spacing: { after: 80 } }),
                new Paragraph({ text: "6. Return highest priority status found", spacing: { after: 300 } }),

                // Event Type Reference
                new Paragraph({
                    text: "Event Type Reference",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),

                // Attention Drift Events Table
                new Paragraph({
                    text: "Attention Drift Events",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 100 }
                }),
                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ text: "Event Type", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Description", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Example Scenario", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "idle.detected" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Learner inactive for extended period" })] }),
                                new TableCell({ children: [new Paragraph({ text: "No activity for 2+ minutes" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "video.pause" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Video manually paused" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Learner paused mid-lesson" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "video.buffer.start" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Video buffering started" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Poor network or distraction" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "lesson.locked_click" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Attempted locked content" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Trying to skip ahead" })] })
                            ]
                        })
                    ]
                }),

                new Paragraph({ text: "", spacing: { after: 200 } }),

                // Content Friction Events Table
                new Paragraph({
                    text: "Content Friction Events",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 100 }
                }),
                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ text: "Event Type", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Description", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Example Scenario", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "quiz.fail" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Failed quiz attempt" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Score below passing threshold" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "quiz.retry" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Retrying quiz after failure" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Multiple attempts on same quiz" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "tutor.prompt" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Asking tutor for help" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Learner sends AI tutor message" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "cold_call.submit" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Submitted cold call response" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Participating in discussion" })] })
                            ]
                        })
                    ]
                }),

                new Paragraph({ text: "", spacing: { after: 200 } }),

                // Engaged Events Table
                new Paragraph({
                    text: "Engaged Events",
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 100 }
                }),
                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ text: "Event Type", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Description", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Example Scenario", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "video.play" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Started watching video" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Clicked play on lesson video" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "video.resume" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Resumed video after pause" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Continued watching after break" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "progress.snapshot" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Progress checkpoint reached" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Completed 25%, 50%, 75% of video" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "notes.create" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Created note" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Took notes during lesson" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "lesson.complete" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Completed lesson" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Finished all lesson content" })] })
                            ]
                        })
                    ]
                }),

                new Paragraph({ text: "", spacing: { after: 300 } }),

                // Example Scenario
                new Paragraph({
                    text: "Example: Attention Drift Detection",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),
                new Paragraph({
                    text: "Scenario: A learner named Sarah is watching a video lesson on React hooks. She pauses the video multiple times, goes idle, and eventually closes the tab.",
                    spacing: { after: 200 }
                }),

                // Event Timeline Table
                new Paragraph({
                    text: "Event Timeline:",
                    spacing: { after: 100 }
                }),
                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ text: "Time", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Event Type", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Derived Status", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ text: "Status Reason", bold: true })],
                                    shading: { fill: "D3D3D3" }
                                })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "09:00" })] }),
                                new TableCell({ children: [new Paragraph({ text: "video.play" })] }),
                                new TableCell({ children: [new Paragraph({ text: "engaged" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Learner interacting with content" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "09:05" })] }),
                                new TableCell({ children: [new Paragraph({ text: "video.pause" })] }),
                                new TableCell({ children: [new Paragraph({ text: "attention_drift" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Idle or pause pattern detected" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "09:07" })] }),
                                new TableCell({ children: [new Paragraph({ text: "video.resume" })] }),
                                new TableCell({ children: [new Paragraph({ text: "engaged" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Learner interacting with content" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "09:10" })] }),
                                new TableCell({ children: [new Paragraph({ text: "idle.detected" })] }),
                                new TableCell({ children: [new Paragraph({ text: "attention_drift" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Idle or pause pattern detected" })] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({ children: [new Paragraph({ text: "09:15" })] }),
                                new TableCell({ children: [new Paragraph({ text: "video.pause" })] }),
                                new TableCell({ children: [new Paragraph({ text: "attention_drift" })] }),
                                new TableCell({ children: [new Paragraph({ text: "Idle or pause pattern detected" })] })
                            ]
                        })
                    ]
                }),

                new Paragraph({ text: "", spacing: { after: 200 } }),

                new Paragraph({
                    text: "Aggregation Result:",
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: "When the tutor queries Sarah's status, the system retrieves the last 20 events, finds multiple attention_drift events and some engaged events, and selects attention_drift as the highest priority status.",
                    spacing: { after: 200 }
                }),
                new Paragraph({
                    text: "Tutor Dashboard Display:",
                    spacing: { after: 80 }
                }),
                new Paragraph({ text: "• Status: Attention Drift (Yellow Badge)", spacing: { after: 80 } }),
                new Paragraph({ text: "• Last Event: video.pause at 09:15", spacing: { after: 80 } }),
                new Paragraph({ text: "• Reason: Idle or pause pattern detected (video.pause)", spacing: { after: 200 } }),
                new Paragraph({
                    text: "Tutor Action: Send email to check if Sarah needs help or is facing technical issues",
                    spacing: { after: 300 }
                }),

                // Key Insights
                new Paragraph({
                    text: "Key Insights",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),
                new Paragraph({
                    text: "Why This System Matters:",
                    spacing: { after: 100 }
                }),
                new Paragraph({ text: "• Early Intervention - Tutors identify struggling learners before dropout", spacing: { after: 80 } }),
                new Paragraph({ text: "• Data-Driven Decisions - Objective metrics replace subjective assessments", spacing: { after: 80 } }),
                new Paragraph({ text: "• Scalability - Automated classification handles thousands of learners", spacing: { after: 80 } }),
                new Paragraph({ text: "• Personalization - Insights enable targeted support and content adjustments", spacing: { after: 200 } }),

                new Paragraph({
                    text: "Design Principles:",
                    spacing: { after: 100 }
                }),
                new Paragraph({ text: "• Prefix-Based Classification - Simple, maintainable, extensible", spacing: { after: 80 } }),
                new Paragraph({ text: "• Priority-Based Aggregation - Most critical status surfaces first", spacing: { after: 80 } }),
                new Paragraph({ text: "• Batched Transmission - Reduces network overhead by 95%", spacing: { after: 80 } }),
                new Paragraph({ text: "• Fail-Safe - Events lost on network failure won't crash system", spacing: { after: 80 } }),
                new Paragraph({ text: "• Privacy-Aware - No PII in event payloads", spacing: { after: 300 } }),

                // Performance Considerations
                new Paragraph({
                    text: "Performance Considerations",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),
                new Paragraph({ text: "• Buffering reduces HTTP requests by 95% (20 events per request vs 20 requests)", spacing: { after: 80 } }),
                new Paragraph({ text: "• Database indexes on (courseId, userId, createdAt) ensure fast queries", spacing: { after: 80 } }),
                new Paragraph({ text: "• SQL window functions efficiently retrieve recent events per learner", spacing: { after: 80 } }),
                new Paragraph({ text: "• In-memory aggregation happens in application layer, not database", spacing: { after: 300 } }),

                // Related Files
                new Paragraph({
                    text: "Related Files",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),
                new Paragraph({
                    text: "Frontend:",
                    spacing: { after: 80 }
                }),
                new Paragraph({ text: "• frontend-tutor/src/utils/telemetry.ts - Event buffering and transmission", spacing: { after: 80 } }),
                new Paragraph({ text: "• frontend-tutor/src/pages/TutorDashboardPage.tsx - Dashboard UI", spacing: { after: 200 } }),

                new Paragraph({
                    text: "Backend:",
                    spacing: { after: 80 }
                }),
                new Paragraph({ text: "• backend-tutor/src/services/activityEventService.ts - Classification logic", spacing: { after: 80 } }),
                new Paragraph({ text: "• backend-tutor/src/routes/activity.ts - API endpoints", spacing: { after: 80 } }),
                new Paragraph({ text: "• backend-tutor/prisma/schema.prisma - Database schema", spacing: { after: 300 } }),

                // Summary
                new Paragraph({
                    text: "Summary",
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 300, after: 200 }
                }),
                new Paragraph({
                    text: "The telemetry aggregation system transforms raw learner interactions into actionable insights through a five-stage pipeline:",
                    spacing: { after: 100 }
                }),
                new Paragraph({ text: "1. Capture - Frontend records learner actions as typed events", spacing: { after: 80 } }),
                new Paragraph({ text: "2. Buffer - Events batched for efficient transmission", spacing: { after: 80 } }),
                new Paragraph({ text: "3. Classify - Backend categorizes events into engagement statuses", spacing: { after: 80 } }),
                new Paragraph({ text: "4. Store - Database persists events with derived metadata", spacing: { after: 80 } }),
                new Paragraph({ text: "5. Aggregate - Priority-based selection surfaces most critical status per learner", spacing: { after: 200 } }),

                new Paragraph({
                    text: "This enables tutors to proactively identify learners experiencing Attention Drift (disengagement) or Content Friction (struggle), allowing timely intervention and support.",
                    spacing: { after: 300 }
                })
            ]
        }]
    });

    return doc;
};

// Generate document
async function generateDocument() {
    try {
        const doc = createTelemetryAggregationDoc();
        const buffer = await Packer.toBuffer(doc);

        fs.writeFileSync('Telemetry_Aggregation_Guide.docx', buffer);

        console.log('✅ Successfully created Word document:');
        console.log('   Telemetry_Aggregation_Guide.docx');
    } catch (error) {
        console.error('❌ Error generating document:', error);
        process.exit(1);
    }
}

generateDocument();
