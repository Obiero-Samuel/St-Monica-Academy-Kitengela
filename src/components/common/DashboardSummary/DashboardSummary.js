import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Students", value: 420 },
    { name: "Teachers", value: 38 },
    { name: "Clubs", value: 12 },
    { name: "Events", value: 7 },
];

const COLORS = ["#4f8cff", "#ff7fa3", "#a17fff", "#4fd6b8"];

const DashboardSummary = () => (
    <div style={{ background: "var(--glass-bg)", borderRadius: "1rem", boxShadow: "var(--shadow-md)", padding: "2rem", margin: "2rem 0", maxWidth: 400, textAlign: "center" }}>
        <h2>School Overview</h2>
        <ResponsiveContainer width="100%" height={220}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
        <div style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
            <div>Students: 420</div>
            <div>Teachers: 38</div>
            <div>Clubs: 12</div>
            <div>Events: 7</div>
        </div>
    </div>
);

export default DashboardSummary;
