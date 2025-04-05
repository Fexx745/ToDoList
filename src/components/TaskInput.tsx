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
        <div className="flex mb-5 shadow-sm">
            <input
                type="text"
                className="flex-grow border border-gray-300 p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-700"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="เพิ่มงานใหม่..."
                onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            />
            <button
                onClick={handleAdd}
                className="px-5 py-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-medium rounded-r-lg transition-colors duration-150 flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                เพิ่ม
            </button>
        </div>
    );
}
