import React, { useEffect } from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import Panel from "../../../../components/Panel";
import AbsolutButton from "../../../../components/Buttons/AbsolutButton";
import {
  getTasks,
  getTasksByCompany,
} from "../../../../store/actions/taskActions";
import TasksTable from "../../../../components/Tables/Tasks/TasksTable";
import TasksFilter from "../../../../components/Filters/TasksFilter";

const Tasks: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const isLoading = useAppSelector((state) => state.tasks.isLoading);
  const tasks = useAppSelector(getTasks());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasksByCompany(companyId));
  }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Задачи / Список задач"
      title="Задачи"
      mainTitle="Список задач"
    >
      <AbsolutButton text="Добавить задачу" href="/tasks/addTask" />
      <Panel>
        <TasksFilter companyId={companyId} />
      </Panel>
      {!isLoading ? (
        <>
          {tasks.length ? (
            <TasksTable companyId={companyId} tasks={tasks} />
          ) : (
            <h2>Задачи отсутствуют</h2>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};
export default Tasks;
