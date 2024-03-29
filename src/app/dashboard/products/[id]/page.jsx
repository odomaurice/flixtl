import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'


const SingleProductPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
             <Image src="/noavatar.png" alt="avatar" fill />
          </div>
          iPhone
        </div>
        <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value=""/>
          <label>Title</label>
          <input type="text" name="title" placeholder="" />
          <label>Price</label>
          <input type="number" name="price" placeholder="" />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen" selected>Kitchen</option>
            <option value="computers" selected>Computers</option>
          </select>
          <label>Description</label>
          <textarea name='desc' id='desc' rows='10' placeholder='description' />
          <button>Update</button>
        </form>
        </div>
    </div>
  )
}

export default SingleProductPage