import cv2
import mediapipe as mp
import pyautogui
import tkinter as tk
from PIL import Image, ImageTk

class mouseController:
    def start(self):
        self.running = True

    def stop(self):
        self.running = False


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
