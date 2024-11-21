import { ExampleLink } from '../components/example-link'

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-4xl font-semibold">Secure Next.js Playground</h1>
      <div className="mt-4 flex flex-col space-y-2">
        <ExampleLink href="/private-page">Private page</ExampleLink>
        <ExampleLink href="/taint">React Taint API</ExampleLink>
        <ExampleLink href="/csrf">CSRF examples</ExampleLink>
        <ExampleLink href="/task-stateless">Task Stateless</ExampleLink>
        <ExampleLink href="/task-stateful">Task Stateful</ExampleLink>
      </div>
    </main>
  )
}
