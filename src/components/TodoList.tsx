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

    return (
        <div className="max-w-md mx-auto p-4 mt-20 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} editTask={editTask} deleteTask={deleteTask} />
        </div>
    );
}
