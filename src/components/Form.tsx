import "../styles/form.css"
import FooterComponent from "./Footer";
'use client';

import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

export default function Form() {
  return (
 <div>
     <h2 id="text" className="text-3xl font-bold mb-4 text-blue-500">Want to Hire me or colaborare? <br /> reach me hire</h2>

<div id="formulario"> 
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          placeholder="name@yourname.com"
          required
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="Subject"
            value="Subject"
            placeholder="Congratulations"
          />
        </div>
        <TextInput
          id="subject"
          required
          type="text"
        />
      </div>

      <div
      className="max-w-md"
      id="message"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="Message"
          value="Your message"
        />
      </div>
      <Textarea
        id="comment"
        placeholder="Leave a message"
        required
        rows={4}
      />
    </div>
     
      <Button type="submit" id="button">
        Send
      </Button>
    </form>
</div>
<FooterComponent /> 
 </div>   
 

    
  )
}


