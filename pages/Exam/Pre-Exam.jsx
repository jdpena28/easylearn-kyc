import { useRef, useState, useCallback } from "react"
import Layout from "../../src/components/Layout"
import Input from "../../src/components/Input"
import Button from "../../src/components/Button"
import Webcam from "react-webcam"

import useUpdateEffect from "../../src/hooks/useUpdateEffect"

const App = () => {
  const [enrollee, setEnrollee] = useState({
    LastName: "",
    FirstName: "",
    MiddleName: "",
  })

  const webcamRef = useRef(null)
  const [openCamera, setOpenCamera] = useState(false)
  const [showBtnCapture, setShowBtnCapture] = useState(false)
  const [counter, setCounter] = useState(3)
  const [imgsrc, setImgsrc] = useState(null)

  const captureImg = () => {
    if (counter == 0) {
      setCounter(3)
    } else {
      setCounter(counter - 1)
    }
  }
  useUpdateEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    counter == 0 && screenshot()
  }, [counter])

  const screenshot = useCallback(() => {
    setImgsrc(webcamRef.current.getScreenshot())
  }, [webcamRef])

  return (
    <Layout title={"Pre-exam Identification"}>
      <div className='container mx-auto'>
        <h3 className='font-bold text-2xl'>Pre-exam Identification</h3>
        <div className='mx-auto max-w-6xl sm:max-w-full'>
          <form className='space-y-5'>
            <div className='flex sm:block justify-between mt-3 sm:space-y-2'>
              <Input
                label='Last Name'
                placeholder='Doe'
                onChange={(e) => {
                  setEnrollee({ ...enrollee, LastName: e.target.value })
                }}
              />
              <Input
                label='First Name'
                placeholder='John'
                onChange={(e) => {
                  setEnrollee({ ...enrollee, FirstName: e.target.value })
                }}
              />
              <Input
                label='Middle Name'
                placeholder='Michael'
                onChange={(e) => {
                  setEnrollee({ ...enrollee, MiddleName: e.target.value })
                }}
              />
            </div>

            <div className='grid sm:block grid-cols-5 justify-end'>
              <div className='space-y-3'>
                <div className='flex w-full'></div>
                <p className='text-2xl font-bold'>
                  Lets take a picture of you.
                </p>
                <p className='text-sm w-64 sm:w-full leading-none'>
                  *This will be used for identification purposes. The picture
                  will cross match from the pre enrollment ID you provided.
                </p>
                <p className='w-44 sm:w-full h-12 truncate'>
                  Image:&nbsp;{imgsrc}
                </p>
                <div className='relative mx-auto w-max sm:w-full hidden sm:flex'>
                  <Webcam
                    audio={false}
                    mirrored={true}
                    className='mx-auto sm:w-full'
                    screenshotFormat='image/jpeg'
                    ref={webcamRef}
                    width={480}
                    onUserMedia={() => {
                      setShowBtnCapture(true)
                    }}
                  />
                  {counter > 0 && (
                    <div className='h-full w-full absolute flex justify-center items-center'>
                      <p className='font-extrabold text-white text-6xl'>
                        {counter}
                      </p>
                    </div>
                  )}
                </div>
                {showBtnCapture && (
                  <button
                  type='button'
                    onClick={captureImg}
                    className='bg-slate-700 p-3 text-white w-32 hidden sm:block'
                  >
                    Capture
                  </button>
                )}

                {/* WEBCAM CAMERA FUNCTION FOR DESKTOP VIEW */}
                <button
                  type='button'
                  className='sm:hidden font-semibold bg-tertiary text-white p-2'
                  onClick={() =>
                    openCamera ? setOpenCamera(false) : setOpenCamera(true)
                  }
                >
                  {openCamera ? "Close" : "Open"} Camera
                </button>
              </div>
              <div className='sm:hidden col-span-3 col-start-3'>
                <h4 className='font-semibold text-2xl'>CAMERA</h4>
                <div className='h-max w-max space-y-2  bg-gray-200'>
                  {openCamera && (
                    <div className='relative mx-auto w-max flex'>
                      <Webcam
                        audio={false}
                        mirrored={true}
                        className='mx-auto'
                        screenshotFormat='image/jpeg'
                        ref={webcamRef}
                        width={450}
                        onUserMedia={() => {
                          setShowBtnCapture(true)
                        }}
                      />
                      {counter > 0 && (
                        <div className='h-full w-full absolute flex justify-center items-center'>
                          <p className='font-extrabold text-white text-6xl'>
                            {counter}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  {showBtnCapture && openCamera && (
                    <button
                      type='button'
                      onClick={captureImg}
                      className='bg-slate-700 p-3 text-white w-32'
                    >
                      Capture
                    </button>
                  )}
                </div>
              </div>
            </div>
            <Button
              link={"/Exam/ExamCoupon"}
              btnText='NEXT'
              btnType={"submit"}
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default App
