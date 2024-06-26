import cv2
import mediapipe as mp
import pyautogui
import tkinter as tk
from PIL import Image, ImageTk

class MouseController:
    def __init__(self):
        self.face_mesh = mp.solutions.face_mesh.FaceMesh(refine_landmarks=True)
        self.camera = cv2.VideoCapture(0)
        self.screen_width, self.screen_height = pyautogui.size()
        self.running = False
        self.calibration_active = False
        self.calibration_text = ""
        self.calibration_end_time = 0

    def start(self):
        self.running = True
        self.capture()

    def stop(self):
        self.running = False

    def capture(self):
        if self.running:
            ret, frame = self.camera.read()
            frame = cv2.flip(frame, 1)
            frame_height, frame_width, _ = frame.shape
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            output = self.face_mesh.process(rgb_frame)
            if output.multi_face_landmarks:
                landmarks = output.multi_face_landmarks[0].landmark
                if not self.calibration_active:
                    self.change_mouse_position(landmarks)
                    self.right_click([landmarks[475], landmarks[477]])
                    self.left_click([landmarks[144], landmarks[160]])
                self.display_landmarks(frame, [landmarks[475], landmarks[477], landmarks[144], landmarks[160]])

            self.display_frame(frame)
            self.root.after(10, self.capture)

    def change_mouse_position(self, landmarks):
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

    def left_click(self, left):
        for landmark in left:
            if (left[0].y - left[1].y) < 0.008:
                pyautogui.click()

    def right_click(self, right):
        print(right[1].y - right[0].y)
        for landmark in right:
            if (right[1].y - right[0].y) < 0.017:
                pyautogui.click(button="right")

    def display_frame(self, frame):
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        frame = cv2.resize(frame, (640, 480))
        self.img = ImageTk.PhotoImage(Image.fromarray(frame))
        self.video_panel.config(image=self.img)
        if self.calibration_text:
            self.calibration_label.config(text=self.calibration_text)

    def display_landmarks(self, frame, landmarks):
        frame_height, frame_width, _ = frame.shape
        for landmark in landmarks:
            x = int(landmark.x * frame_width)
            y = int(landmark.y * frame_height)
            cv2.circle(frame, (x, y), 3, (0, 255, 255))

    def calibrate(self):
        self.calibration_active = True
        self.running = True
        self.capture()
        self.calibration_text = "Close left eye..."
        self.update_calibration_text()
        self.root.after(5000, self.calibrate_right_eye)

    def calibrate_right_eye(self):
        self.calibration_text = "Close right eye..."
        self.update_calibration_text()
        self.root.after(5000, self.calibrate_movement_head_up)

    def calibrate_movement_head_up(self):
        self.calibration_text = "Move Your head slightly up"
        self.update_calibration_text()
        self.root.after(3500,self.calibrate_movement_head_down)

    def calibrate_movement_head_down(self):
        self.calibration_text = "Move your head slightly down"
        self.update_calibration_text()
        self.root.after(3500,self.calibrate_movement_head_left())

    def calibrate_movement_head_left(self):
        self.calibration_text = "Move your head slightly to the left"
        self.update_calibration_text()
        self.root.after(3500,self.calibrate_movement_head_right)

    def calibrate_movement_head_right(self):
        self.calibration_text = "Move your head slightly to the right"
        self.update_calibration_text()
        self.root.after(3500,self.finish_calibration)

    def finish_calibration(self):
        self.calibration_text = "Calibration complete."
        self.update_calibration_text()
        self.calibration_active = False

    def update_calibration_text(self):
        self.calibration_label.config(text=self.calibration_text)

    def run(self):
        self.root = tk.Tk()
        self.root.title("Visioniyam")

        # Load icon
        self.root.iconbitmap('icon.ico')

        button_frame = tk.Frame(self.root)
        button_frame.pack(pady=10)

        self.start_btn = tk.Button(button_frame, text="Start Capturing", command=self.start , height=3)
        self.start_btn.pack(side=tk.LEFT, padx=10)

        self.stop_btn = tk.Button(button_frame, text="Stop Capturing", command=self.stop , height=3)
        self.stop_btn.pack(side=tk.LEFT, padx=10)

        self.calibrate_btn = tk.Button(button_frame, text="Calibrate", command=self.calibrate , height=3)
        self.calibrate_btn.pack(side=tk.LEFT, padx=10)

        self.calibration_label = tk.Label(self.root, text="")
        self.calibration_label.pack(pady=10)

        self.video_panel = tk.Label(self.root)
        self.video_panel.pack()

        self.root.mainloop()

if __name__ == "__main__":
    visioniyam = MouseController()
    visioniyam.run()
