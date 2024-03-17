'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Please enter your email.',
                confirmButtonColor: '#EB662B',
            });
            return;
        }
        console.log('Submitted email:', email);
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your email has been submitted successfully.',
            confirmButtonColor: '#EB662B',
        });
        setEmail('');
    };

    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold mb-6">Newsletter</h2>
                <p className="pb-4">Subscribe to the free newsletter and stay up to date</p>
            </div>

            <form onSubmit={handleSubmit} className="flex items-center">
                <input
                    type="email"
                    placeholder="Your email"
                    className="bg-white px-4 py-2 rounded-l-md text-dark_blue w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ border: '1px solid #ccc' }}
                />
                <button
                    type="submit"
                    className="bg-white text-dark_blue px-4 py-2 rounded-r-md hover:text-light_gray"
                    style={{ border: '1px solid #ccc' }}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default NewsletterForm;
