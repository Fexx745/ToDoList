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
        <ul className="rounded-lg shadow-md divide-y divide-gray-200 bg-white">
            {tasks.map((task, index) => (
                <li key={index} className="flex items-center justify-between p-3 group hover:bg-gray-50 transition-colors duration-150">
                    <div className="flex items-center flex-grow">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(index)}
                            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            className={`ml-3 flex-grow bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-2 py-1 ${task.completed ? "line-through text-gray-400" : "text-gray-700"
                                }`}
                            value={task.text}
                            onChange={(e) => editTask(index, e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => deleteTask(index)}
                        className="ml-2 p-1.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors duration-150"
                        aria-label="ลบรายการ"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </li>
            ))}
        </ul>
    );
}
