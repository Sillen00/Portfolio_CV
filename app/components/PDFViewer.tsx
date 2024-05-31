interface PDFViewerProps {
  src: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ src }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center'>
      <div className='relative w-11/12 h-5/6 bg-white p-4'>
        <iframe src={src} className='w-full h-full' />
        <button onClick={() => window.location.reload()} className='absolute z-50 top-2 right-2 bg-red-500 text-white p-1 rounded'>
          Stäng
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
