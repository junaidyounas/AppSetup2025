// utils.ts

// Function to determine file type based on file extension
export const getFileType = (fileName: string): string => {
    const fileExtension = fileName.split('.').pop()?.toLowerCase();
    switch (fileExtension) {
      case 'mp4':
        return 'Video';
      case 'pdf':
        return 'Document';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'Image';
      default:
        return 'Unknown';
    }
  };
  
  // Function to generate a unique file name based on the current date and time
  export const generateUniqueFileName = (originalFileName: string): string => {
    const date = new Date();
    const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const timeString = `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    const fileExtension = originalFileName.split('.').pop() || '';
    return `${dateString}_${timeString}.${fileExtension}`;
  };

  export const generateUniqueFileNameWithExtention = (extention: string): string => {
    const date = new Date();
    const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const timeString = `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    return `${dateString}_${timeString}.${extention}`;
  };