import { useState } from 'react'
import { IMAGE_CONSTRAINTS } from '@/shared/constants'

interface UseImageUploadProps {
  onError: (message: string) => void
}

export const useImageUpload = ({ onError }: UseImageUploadProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > IMAGE_CONSTRAINTS.MAX_SIZE) {
        onError('messages.fileTooLarge')
        return
      }

      if (!file.type.startsWith('image/')) {
        onError('messages.invalidFileType')
        return
      }

      setSelectedImage(file)

      const reader = new FileReader()
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearImage = () => {
    setSelectedImage(null)
    setImagePreview(null)
  }

  return {
    selectedImage,
    imagePreview,
    handleImageChange,
    clearImage,
  }
}
