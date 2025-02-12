import { useState } from 'react'
import val_logo from './assets/jpcs_val_logo.png'
import jpcs_tag from './assets/jpcs_tag.png'
import cupid_logo from './assets/cupid404_logo.png'
import web_bg from './assets/web_background.png'
import emailjs from "@emailjs/browser";
import './App.css'

function App() {
  const [Message, setMessage] = useState("");
  const [ToEmail, setToEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    setIsLoading(true);

    const serviceId = "service_7rdgwxs";
    const templateId = "template_hq8vdzx";
    const userId = "JdIeekyTxJk7gWOkd";

    const templateParams = {
      to_email: ToEmail,
      message: Message,
      from_email: "your_default_email@example.com",
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(() => {
        alert("Email sent successfully!");
        setToEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Failed to send email: " + error.text);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p className="text-lg font-bold">Sending email...</p>
          </div>
        </div>
      )}

      <div className='h-lvh w-lvw flex flex-col'>
        <img src={web_bg} className='absolute h-full md:w-full object-cover z-0 overflow-x-clip' />
        <div className='z-10 relative h-40 md:h-52 p-5 flex flex-col items-center md:items-start md:flex-row justify-between flex-none'>
          <div className='md:relative h-13 w-13  md:h-20 md:w-20'>
            <a href='https://www.facebook.com/jpcs.numoa'><img src={val_logo} className='object-cover hover:cursor-pointer'/></a>
          </div>
          <div className='relative self-center min-w-40 md:self-end w-5/6 flex max-w-96  md:block md:w-2/6 md:min-w-96'>
            <img src={cupid_logo} className='object-contain md:object-cover' />
          </div>
          <div className='hidden md:block md:relative  h-20 w-20 '>
            <img src={jpcs_tag} className='object-cover' />
          </div>
        </div>
        <div className='relative flex flex-col md:flex-row h-auto flex-1  md:flex-2 m-5 p-5 gap-10 md:gap-5'>
          <div className='h-[45svh] flex-1 md:flex-1  flex flex-col gap-2 px-4 md:p-0'>
            <p className='font-bold flex-none'>Email:</p>
            <input value={ToEmail} onChange={(e) => setToEmail(e.target.value)} type='text' name='to_email' placeholder='Recipient’s email address...' className='border-1 p-2 rounded-md flex-none' />
            <p className='font-bold flex-none'>Message:</p>
            <textarea value={Message} onChange={(e) => setMessage(e.target.value)} name='message' maxLength={120} type='text' placeholder='Enter your message here...' className='border-1 p-2 rounded-md flex-1 text-start' />
            <button onClick={handleSend} className='bg-pink-500 self-center px-4 py-1 text-white font-bold rounded-2xl w-fit flex-none hover:cursor-pointer mt-2'>Send &lt;3</button>
          </div>
          <div className='md:flex-1 flex flex-col gap-2  px-4 md:p-3 md:pl-7'>
            <p className='font-extrabold flex-none text-lg'>How It Works</p>
            <p className='text-justify text-sm'>Write your Valentine's message—whether a poem, note or simple "I like you"—then enter the recipient's email address to ensure it goes to the right person.</p>
            <p className='font-extrabold flex-none text-lg mt-3'>FAQs</p>
            <p className='font-bold flex-none'>Can I remain completely anonymous?</p>
            <p className='text-justify text-sm pl-5'>Yes, we don’t share any personal information when sending the message. Your identity stays hidden.</p>
            <p className='font-bold flex-none'>What if the recipient doesn't like it?</p>
            <p className='text-justify text-sm pl-5'>We suggest keeping your messages light, sweet, and fun! If it’s truly anonymous, they’ll just wonder who it was from and smile at the mystery.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
