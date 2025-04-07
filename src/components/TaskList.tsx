interface Task {
    text: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    toggleTask: (index: number) => void;
    editTask: (index: number, newText: string) => void;
    deleteTask: (index: number) => void;
}

export default function TaskList({ tasks, toggleTask, editTask, deleteTask }: TaskListProps) {
    return (
        <ul className="rounded-lg shadow-md divide-y divide-gray-200 bg-white overflow-hidden">
            {tasks.map((task, index) => (
                <li key={index} className="flex items-center justify-between p-4 group hover:bg-blue-50 transition-all duration-200 ease-in-out">
                    <div className="flex items-center flex-grow">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(index)}
                                className="w-5 h-5 rounded-full border-2 border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                            />
                        </div>
                        <input
                            type="text"
                            className={`ml-4 flex-grow bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-3 py-1.5 ${task.completed
                                ? "line-through text-gray-400 italic"
                                : "text-gray-700 font-medium"
                                } transition-all duration-200`}
                            value={task.text}
                            onChange={(e) => editTask(index, e.target.value)}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        {task.completed && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                                เสร็จแล้ว
                            </span>
                        )}
                        <button
                            onClick={() => deleteTask(index)}
                            className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 opacity-0 group-hover:opacity-100 transform group-hover:scale-110"
                            aria-label="ลบรายการ"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </li>
            ))}
            {tasks.length === 0 && (
                <li className="p-6 text-center text-gray-500 italic">
                    ไม่มีรายการงาน - เพิ่มงานใหม่เลย!
                </li>
            )}
        </ul>
    );
}
