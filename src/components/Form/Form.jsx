import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form.css'
import { useEffect } from 'react'
export const Form = ({onSubmit}) => {
  const schema = yup.object().shape({
    categories: yup.string().required(),
    title: yup.string().required(),
    author: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        categories: '',
        title: '',
        author: '',
      })
    }
  }, [formState, reset])

 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrapper-input">
      <input
        type='text'
        placeholder='Categories...'
        {...register('categories')}
      />
      <p>{errors?.categories?.message}</p>
      </div>
      <div className="wrapper-input">
      <input
        type='text'
        placeholder='Book title...'
        {...register('title')}
      />
      <p>{errors.title?.message}</p>
      </div>
      <div className="wrapper-input">
      <input
        type='text'
        placeholder='Author...'
        {...register('author')}
      />
      <p>{errors.author?.message}</p>
      </div>
      <div className="wrapper-input">
      <input
        type='submit'
        value='ADD BOOK'
      />
      </div>
    </form>
  )
}
