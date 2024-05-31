interface PDFViewerProps {
  src: string;
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ src, onClose }) => {
  return (
    <div className='fixed z-50 inset-0 bg-black bg-opacity-60 flex justify-center items-center'>
      <div className='relative w-11/12 sm:w-10/12 h-5/6'>
        <iframe src={src} className='w-full h-full' />
        <button onClick={onClose} className='absolute top-3 -right-14 bg-red-500 text-white p-1 rounded'>
          Stäng
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
