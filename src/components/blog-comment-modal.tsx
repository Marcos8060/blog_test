import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import AddComment from "./add-comment";

function BlogCommentModal({ data }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <p onClick={onOpen} className="text-sm text-gray cursor-pointer">
        View all {Array.isArray(data.comments) && data.comments?.length} comments
      </p>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="800px">
          <section className="flex">
            <div className="w-4/12">
              <img
                className="w-full h-[60vh] object-cover"
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${data?.image}`}
                alt=""
              />
            </div>
            <div className="w-8/12 relative">
              <div className="px-2 py-2 border-b">
                <p className="font-bold">{data?.title}</p>
              </div>
              <div className="py-3 px-4 h-[40vh] overflow-y-auto">
                {Array.isArray(data.comments) && data?.comments.map((comment: any,index:any) => (
                  <div key={index} className="my-4 flex items-center justify-between">
                    <div className="flex gap-2 my-2">
                      <p className="font-bold text-sm">{comment?.author}:</p>
                      <p className="text-sm">{comment?.text}</p>
                    </div>
                    <div className="flex justify-end">
                      <p className="text-xs pl-16 font-bold">
                        {new Date(comment?.pub_date).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          }
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-1 w-full">
                <AddComment {...{ data }} />
              </div>
            </div>
          </section>

          {/* <ModalFooter>
            <button
              className="bg-button text-white px-4 py-2 rounded text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default BlogCommentModal;
