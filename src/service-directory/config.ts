import { TabType } from "./types";
import { Todo } from "../task-2-to-do/Todo";
import { UsersDirectory } from "../task-3-users/UsersDirectory";
import { ObjProperty } from "../task-1-property";

export const globalTheme = {
    global: {
        font: {
            family: "Roboto",
            size: "18px",
            height: "20px",
        },
    },
};

export const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
export const tabsConfig: Array<TabType> = [
    {
        id: 'schedule',
        title: 'Задание 1',
        task: '1. Описать функцию getObjProperty\n' +
            '2. Нормализовать данные из getSchedule',
        component: ObjProperty,
    },
    {
        id: 'todo',
        title: 'Задание 2',
        task: '1. Написать логику хранения и обработки списка задач list - Добавление/Удаление используя, локальное состояние\n' +
            '2. Вывести список задач. Использовать компонент Task в src/task-2-to-do/Task/index.tsx',
        component: Todo,
    },
    {
        id: 'users',
        title: 'Задание 3',
        task: '1. Открыть консоль браузера и починить рантайм-ошибку в компоненте UsersDirectory\n' +
            '2. Обработать состояния загрузки и ошибки запроса (API рандомно отдаёт 500)\n' +
            '3. Нормализовать данные из getUsers: убрать дубли и пустые записи, привести статус к человекочитаемому виду\n' +
            '4. После загрузки вывести нормализованный список в консоль через console.table(...)',
        component: UsersDirectory,
    },
]