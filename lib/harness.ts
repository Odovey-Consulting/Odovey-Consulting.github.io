export const HARNESS_ENGINEERING_REPO = 'https://github.com/averagejoeslab/harness-engineering'

export type HarnessPrimitive = {
  name: string
  role: string
  example: string
}

// The five primitives every agent harness reduces to.
export const harnessPrimitives: HarnessPrimitive[] = [
  {
    name: 'Input',
    role: 'Captures what comes in',
    example: 'A message, an event, the result of an action',
  },
  {
    name: 'Context',
    role: 'Assembles what the model is shown',
    example: 'Instructions, memory, retrieved knowledge, the task',
  },
  {
    name: 'Model interface',
    role: 'Requests a response from the model',
    example: 'A hosted API, a self-hosted model, a router across several',
  },
  {
    name: 'Output',
    role: "Handles the model's outputs",
    example: 'A reply, a tool call, a change to a real system',
  },
  {
    name: 'Control flow',
    role: 'Defines the shape of the loop',
    example: 'Go again, hand back to a human, stop',
  },
]

export type ProductionQuestion = {
  question: string
  concern: string
}

// The questions asked of every primitive to get a harness ready for production.
export const productionQuestions: ProductionQuestion[] = [
  { question: 'What should outlast the session?', concern: 'Persistence' },
  { question: 'What could do harm, and who could make it?', concern: 'Safety & Security' },
  { question: 'What did it actually do?', concern: 'Observability' },
  { question: 'What if something breaks?', concern: 'Resilience' },
  { question: 'Why is it slow or costly?', concern: 'Performance' },
  { question: 'How do we know it still works?', concern: 'Evaluation' },
]
