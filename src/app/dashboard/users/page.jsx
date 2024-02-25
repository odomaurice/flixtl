import React from 'react'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Search from '@/app/ui/dashboard/search/search';
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from 'next/link'
import Image from 'next/image'
import { fetchUsers } from '@/app/lib/data';

export const metadata = {
  title: 'Dashboard | users'
    
   
};


const UsersPage = async () => {
  // const users = await fetchUsers();
  // console.log(users)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/users/add">
         <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
      <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src='/noavatar.png' alt='' width={40} height={40} className={styles.userImage}/>
                 Maurice Odo
              </div>
            </td>
            <td>odomaurice501@gmail.com</td>
            <td>13.02.2022</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <Link href="/dashboard/users/test">
              <button className={`${styles.button} ${styles.view}`}>View</button>
             
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default UsersPage
