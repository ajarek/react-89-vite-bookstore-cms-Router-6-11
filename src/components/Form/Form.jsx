import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form.css'

export const Form = () => {
  const schema = yup.object().shape({
    categories: yup.string().required(),
    title: yup.string().email().required(),
    author: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
     console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Categories...'
        {...register('categories')}
      />
      <p>{errors?.categories?.message}</p>
      <input
        type='text'
        placeholder='Book title...'
        {...register('title')}
      />
      <p>{errors.title?.message}</p>
      <input
        type='text'
        placeholder='Author...'
        {...register('author')}
      />
      <p>{errors.author?.message}</p>

      <input
        type='submit'
        value='ADD BOOK'
      />
    </form>
  )
}
