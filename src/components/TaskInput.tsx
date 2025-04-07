import { useState } from "react";

interface TaskInputProps {
    addTask: (text: string) => void;
}

export default function TaskInput({ addTask }: TaskInputProps) {
    const [newTask, setNewTask] = useState<string>("");

    const handleAdd = () => {
        if (newTask.trim() !== "") {
            addTask(newTask);
            setNewTask("");
        }
    };

    return (
        <div className="flex mb-6 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <input
                type="text"
                className="flex-grow border-0 p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-700 text-lg bg-white"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="เพิ่มงานใหม่..."
                onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            />
            <button
                onClick={handleAdd}
                className="px-6 py-4 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 active:from-green-600 active:to-green-800 text-white font-medium transition-all duration-200 flex items-center justify-center transform hover:scale-105 active:scale-95"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">เพิ่ม</span>
            </button>
        </div>
    );
}
