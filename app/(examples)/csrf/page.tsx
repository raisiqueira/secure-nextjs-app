import { headers } from 'next/headers'

import { CSRFForm } from '../../../components/csrf-form'
import { csrfAction } from './csrf-action'

export default function Page() {
  const csrfToken = headers().get('X-CSRF-Token') || 'missing'

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <p>
        CSRF token value:
        {csrfToken}
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Server Action Form Submission Example:</h2>
      <p className="mb-4">
        NOTE: Look at browser network logs and server console for submission feedback
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-4">Example 1:</h3>
      <form action={csrfAction} className="mb-6">
        <legend className="font-medium mb-2">Form without CSRF (should fail):</legend>
        <input type="text" name="input1" className="border rounded px-3 py-2 mr-2 text-black" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <form action={csrfAction} className="mb-6">
        <legend className="font-medium mb-2">Form with incorrect CSRF (should fail):</legend>
        <input type="hidden" name="csrf_token" value="notvalid" />
        <input type="text" name="input1" className="border rounded px-3 py-2 mr-2 text-black" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {/* <form action={csrfAction} className="mb-6">
        <legend className="font-medium mb-2">Form with CSRF (should succeed):</legend>
        <input type="hidden" name="csrf_token" value={csrfToken} />
        <input type="text" name="input1" className="border rounded px-3 py-2 mr-2 text-black" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form> */}
      <CSRFForm action={csrfAction}>
        <input type="text" name="input1" className="border rounded px-3 py-2 mr-2 text-black" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </CSRFForm>
      <h3 className="text-xl font-semibold mt-6 mb-4">Example 2 (file upload):</h3>
      <form action={csrfAction} className="mb-6">
        <legend className="font-medium mb-2">Form without CSRF (should fail):</legend>
        <input type="file" name="file1" className="border rounded px-3 py-2 mr-2 text-black" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <form action={csrfAction} className="mb-6">
        <legend className="font-medium mb-2">Form with incorrect CSRF (should fail):</legend>
        <input type="hidden" name="csrf_token" value="notvalid" />
        <input type="file" name="file1" className="border rounded px-3 py-2 mr-2 text-black" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <form action={csrfAction} className="mb-6">
        <legend className="font-medium mb-2">Form with CSRF (should succeed):</legend>
        <input type="hidden" name="csrf_token" value={csrfToken} />
        <input type="file" name="file1" className="border rounded px-3 py-2 mr-2 text-black" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
