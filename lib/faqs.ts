export type Faq = {
  question: string
  answer: string
}

export const contactFaqs: Faq[] = [
  {
    question: 'What is harness engineering?',
    answer: 'An AI agent is a model inside a harness. The model does the thinking, and the harness does everything else: it captures input, assembles context, calls the model, handles its output, and controls the loop. Harness engineering is the practice of designing, building, evaluating, and hardening that harness.',
  },
  {
    question: 'What does a typical engagement look like?',
    answer: 'Most clients start with a short discovery or readiness assessment, followed by a build or co-build engagement on one high-value use case. Each engagement has a defined scope, timeline, and deliverables agreed upon before work begins.',
  },
  {
    question: 'How quickly can we get an agent into production?',
    answer: 'It depends on the use case and how ready your data and systems are. A focused first agent can often reach a production pilot within weeks, while an enterprise agent platform is typically a multi-month effort delivered in incremental releases.',
  },
  {
    question: 'Do you offer corporate training on its own?',
    answer: 'Yes. Our training programs, from executive briefings to multi-day developer bootcamps, can be booked independently of any consulting engagement and delivered on-site or virtually.',
  },
  {
    question: 'Which models and frameworks do you work with?',
    answer: 'We are vendor-neutral. We work with the major commercial and open-weight models and open standards such as the Model Context Protocol. We pick the model that fits the work, then design the harness so the model can be swapped later.',
  },
  {
    question: 'Will our team be able to maintain what you build?',
    answer: 'That is the goal. Every build engagement includes knowledge transfer, documentation, and runbooks, and our co-build model pairs your engineers with ours throughout the project.',
  },
]
