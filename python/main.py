import cv2
import mediapipe as mp
import pyautogui
import tkinter as tk
from PIL import Image, ImageTk

class mouseController:

    def __init__(self):
        self.faceMesh =mp.solutions.face_mesh.FaceMesh(refine_landmarks=True)
        self.camera = cv2.VideoCapture(0)
        self.screenWidth , self.screenHeight = pyautogui.size()
        self.running = False
    def start(self):
        self.running = True
        self.capture()

    def stop(self):
        self.running = False

    def capture(self):
        if self.running:
            ret , frame = self.camera.read()
            frame = cv2.flip(frame,1)
            frameHeight, frameWidth , _ = frame.shape
            rgbFrame =cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            output = self.faceMesh.process(rgbFrame)

            if output.multi_face_landmarks:
                landmarks = output.multi_face_landmarks[0].landmark
                self.changeMousePosition(landmarks)

        self.displayFrame(frame)
        self.root.after(10,self.capture())


    def changeMousePosition(self, landmarks):
        dist1 = landmarks[411].x - landmarks[1].x
        dist2 = landmarks[411].x - landmarks[206].x
        if (dist1 / dist2 > 0.80):
            pyautogui.move(-30, 0)
        if (dist1 / dist2 < 0.55):
            pyautogui.move(30, 0)

        dist3 = landmarks[10].y - landmarks[1].y
        dist4 = landmarks[10].y - landmarks[152].y
        if (dist3 / dist4 > 0.55):
            pyautogui.move(0, 30)
        if (dist3 / dist4 < 0.49):
            pyautogui.move(0, -30)

    def displayFrame(self,frame):
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        frame = cv2.resize(frame, (640, 480))
        self.img = ImageTk.PhotoImage(Image.fromarray(frame))
        self.videoPanel.config(image=self.img)

    def run(self):
        self.root =tk.Tk()
        self.root.title("Visioniyam")

        self.startBtn =tk.Button(self.root,text="Start Capturing", command=self.start)
        self.startBtn.pack(pady = 10)

        self.stopBtn = tk.Button(self.root, text = "Stop Capturing", command=self.stop)
        self.stopBtn.pack(pady= 5)

        self.videoPanel = tk.Label(self.root)
        self.videoPanel.pack()

        self.root.mainloop()

if __name__ == "__main__":
    visioniyam = mouseController()
    visioniyam.run()
