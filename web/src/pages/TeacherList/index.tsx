import React from 'react'

import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import TeacherItem from '../../components/TeacherItem'

import './style.css'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
                <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            {value: 'artes', label: 'Artes'},
                            {value: 'biologia', label: 'Biologia'},
                            {value: 'fisica', label: 'Física'},
                            {value: 'geografia', label: 'Geografia'},
                            {value: 'historia', label: 'História'},
                            {value: 'matematica', label: 'Matemática'},
                            {value: 'portugues', label: 'Português'},
                            {value: 'quimica', label: 'Química'},
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feita'},
                            {value: '6', label: 'Sábado'},
                        ]}
                    />
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList