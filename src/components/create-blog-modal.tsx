import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function CreateBlogModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button
        className="bg-primary text-white px-4 py-2 rounded text-sm"
        onClick={onOpen}
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="600px" padding={4}>
          <ModalBody>
            <section className="space-y-2">
              <h1 className="font-bold">Create Blog Post</h1>
              <p className="text-sm">
                Enter your blog details here. Click save when you are done.
              </p>
              <form>
                <section className="space-y-2">
                  <div>
                    <label className="text-sm" htmlFor="">
                      Blog Title
                    </label>
                    <input
                      className="border border-primary rounded px-4 py-2 text-xs focus:outline-none w-full"
                      type="text"
                      placeholder="Harry Potter"
                    />
                  </div>
                  <div>
                    <label className="text-sm" htmlFor="">
                      Blog Date
                    </label>
                    <input
                      className="border border-primary rounded px-4 py-2 text-xs focus:outline-none w-full"
                      type="date"
                    />
                  </div>
                  <div>
                    <label className="text-sm" htmlFor="">
                      Slug
                    </label>
                    <input
                      className="border border-primary rounded px-4 py-2 text-xs focus:outline-none w-full"
                      type="text"
                      placeholder="Harry Potter"
                    />
                  </div>
                  <div>
                    <label className="text-sm" htmlFor="">
                      Image
                    </label>
                    <div className="border-dashed border border-primary rounded px-4 py-8 flex flex-col items-center justify-center space-y-2">
                      <p className="text-xs text-link">
                        Please upload images in 100x100 pixels size in either
                        PNG or JPEG format
                      </p>
                      <div className="bg-button px-4 py-2 rounded text-white text-xs block cursor-pointer">
                        Browse files
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm" htmlFor="">
                      Content
                    </label>
                    <textarea
                      className="border border-primary rounded px-4 py-2 text-xs focus:outline-none w-full"
                      placeholder="Harry Potter"
                    />
                  </div>
                </section>
              </form>
            </section>
          </ModalBody>

          <ModalFooter>
            <button
              className="bg-button text-white px-4 py-2 rounded text-sm"
              onClick={onClose}
            >
              Save Changes
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateBlogModal;
