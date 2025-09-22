// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="bg-slate-800 h-16 px-16 items-center flex">
      <h1 className="text-3xl font-bold text-green-500">🏢 Em Servicdee</h1>
      <div className='space-x-4 ml-auto'>
        <a className='hover:text-blue-400' href='/'>Home</a>
        <a className='hover:text-blue-400' href='/'>Profile</a>
        <a className='hover:text-blue-400' href='/'>Log out</a>
      </div>
    </div>
    <div className='container mx-auto my-8'>
    <div>
      <button className='bg-slate-600 hove:bg-blue-700  my-10 font-semibold px-20 py-2 rounded'>Add Employee </button>
    </div>
    <div>
      <table className='shadow'>
        <thead className='bg-slate-600'>
          <th className='px-6 py-3 uppercase tracking-wide'>Name</th>
          <th className='px-6 py-3 uppercase tracking-wide'>Phone</th>
          <th className='px-6 py-3 uppercase tracking-wide'>Email</th>
          <th className='px-6 py-3 uppercase tracking-wide'>Action</th>
        </thead>
        <tbody>
          <tr className='hover:bg-white'>
            <td className='text-left px-6 py-4 whitespace-nowrap'>Coding wallah</td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>6541245435</td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>Codingwallah54@gmail.com</td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
              <a>📝Edit</a>
              <a>🗑️Delete</a>
            </td>
          </tr>

          <tr className='hover:bg-white'>
          <td className='text-left px-6 py-4 whitespace-nowrap'>Coding wallah</td>
          <td className='text-left px-6 py-4 whitespace-nowrap'>6541245435</td>
          <td className='text-left px-6 py-4 whitespace-nowrap'>Codingwallah54@gmail.com</td>
          <td className='text-left px-6 py-4 whitespace-nowrap'>
              <a>📝Edit</a>
              <a>🗑️Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}

export default App;

