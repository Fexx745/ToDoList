import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import Swal from 'sweetalert2';

interface Task {
    text: string;
    completed: boolean;
}

export default function TodoList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [filterCompleted, setFilterCompleted] = useState<boolean>(false);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];
        setTasks(storedTasks);
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks, isLoaded]);

    const addTask = (text: string) => {
        if (text.trim() === "") return;
        setTasks([...tasks, { text, completed: false }]);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'เพิ่มรายการสำเร็จ!',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    };

    const toggleTask = (index: number) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };


    const deleteTask = (index: number) => {
        Swal.fire({
            title: 'คุณแน่ใจหรือไม่?',
            text: 'คุณต้องการลบรายการนี้ใช่หรือไม่',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'ลบเลย',
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            if (result.isConfirmed) {
                setTasks(tasks.filter((_, i) => i !== index));
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'ลบรายการแล้ว',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    const editTask = (index: number, newText: string) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
    };

    const filteredTasks = filterCompleted
        ? tasks.filter(task => task.completed)
        : tasks;

    return (
        <div className="max-w-md mx-auto p-6 mt-16 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    To-Do List
                </h1>
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {filteredTasks.length} รายการ
                </div>
            </div>

            <TaskInput addTask={addTask} />

            <div className="flex justify-between items-center mb-4 mt-6">
                <button
                    onClick={() => setFilterCompleted(prev => !prev)}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-800 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                >
                    {filterCompleted ? "แสดงทั้งหมด" : "แสดงเฉพาะงานที่ทำแล้ว"}
                </button>

                <div className="text-sm text-gray-500">
                    เสร็จแล้ว {tasks.filter(task => task.completed).length}/{tasks.length}
                </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
                <TaskList tasks={filteredTasks} toggleTask={toggleTask} editTask={editTask} deleteTask={deleteTask} />
            </div>
        </div>
    );
}
