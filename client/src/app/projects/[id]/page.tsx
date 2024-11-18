'use client';

import React, { useState } from 'react'
import ProjectHeader from '@/app/projects/ProjectHeader';
import Board from '../BoardView';
import List from '../ListView';
import Timeline from '../TimelineView';
import Table from '../TableView';
import ModalNewTask from '@/components/ModalNewTask';
import { useParams } from 'next/navigation';

const Project = () => {
    const { id } = useParams();
    
    // Ensure id is a string (if it's an array, take the first item)
    const projectId = Array.isArray(id) ? id[0] : id;

    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

    // Optional: Return early if id is undefined
    if (!projectId) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ModalNewTask 
                isOpen={isModalNewTaskOpen}
                onClose={() => setIsModalNewTaskOpen(false)}
                id={projectId} // Ensure id is passed as a string
            />
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {activeTab === "Board" && (
                <Board id={projectId} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "List" && (
                <List id={projectId} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "Timeline" && (
                <Timeline id={projectId} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "Table" && (
                <Table id={projectId} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
        </div>
    );
}

export default Project;
