import { useState } from 'react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            email: data.email,
            message: data.message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      toast.success('Message sent successfully!');
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { submitForm, isLoading };
};