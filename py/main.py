import cv2
import tkinter as tk
from PIL import ImageTk, Image

# create tkinter window
root = tk.Tk()

# create canvas to display video
canvas = tk.Canvas(root, width=640, height=480)
canvas.pack()

# open video file
# cap = cv2.VideoCapture('https://file-examples.com/storage/feee5c69f0643c59da6bf13/2017/04/file_example_MP4_640_3MG.mp4')
cap = cv2.VideoCapture("http://10.10.218.133:5000/video_feed")

# define function to update video frame
def update_frame():
    ret, frame = cap.read() # read frame from video
    if ret:
        # convert frame to tkinter compatible image
        img = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        img = Image.fromarray(img)
        img_tk = ImageTk.PhotoImage(img)

        # update canvas with new image
        canvas.img_tk = img_tk # keep reference to prevent garbage collection
        canvas.create_image(0, 0, anchor='nw', image=img_tk)

    # schedule next update
    root.after(20, update_frame)

# start updating video frames
update_frame()

# start tkinter event loop
root.mainloop()