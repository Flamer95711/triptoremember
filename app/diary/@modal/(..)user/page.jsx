'use client'
import Modal from '@/app/_component/Modal';
import { useDiary } from '@/app/contexts/AppContext';
import { useRouter } from 'next/navigation';

export default function ProfileModal() {
  const router = useRouter();
  const {user} = useDiary();
  
  const handleClose = () => {
    router.back(); 
  };

  return (
    <Modal handleClose={handleClose} isOpen={true}>
      <div className="text-center">
        {/* Profile Avatar */}
        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-white">
            {user.user.name.charAt(0).toUpperCase()}
          </span>
        </div>
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">User Profile</h2>
        
        {/* User Details */}
        <div className="space-y-4 text-left">
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Name</label>
            <p className="text-lg text-gray-800 mt-1">{user.user.name}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Email</label>
            <p className="text-lg text-gray-800 mt-1">{user.user.email}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Username</label>
            <p className="text-lg text-gray-800 mt-1">{user.user.username}</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 justify-center mt-6">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-gray-800 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}