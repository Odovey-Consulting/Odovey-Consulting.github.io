export type Faq = {
  question: string
  answer: string
}

export const contactFaqs: Faq[] = [
  {
    question: 'What does "forward deployed" mean?',
    answer: 'Our engineers work directly inside your environment and alongside your team: in your repositories, your cloud accounts, and your workflows. We stay until the solution is running in production and your team can operate it.',
  },
  {
    question: 'What kinds of agentic solutions do you build?',
    answer: 'It depends on what you need. Engagements range from deploying and configuring the shared platform your agents run on, to building workflow-based or autonomous agents, to building custom internal agent tools your organization fully owns.',
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
    answer: 'We are vendor-neutral. We work with the major commercial and open-weight models and open standards such as the Model Context Protocol. We help you choose what fits, then design so models and tools can be swapped later.',
  },
  {
    question: 'Will our team be able to maintain what you build?',
    answer: 'That is the goal. Every build engagement includes knowledge transfer, documentation, and runbooks, and our co-build model pairs your engineers with ours throughout the project.',
  },
]
