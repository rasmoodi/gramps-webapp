import logging
import os

from flask import redirect, send_file

from .image import get_thumbnail, get_thumbnail_cropped


class MediaHandler:
    def __init__(self, handle, media_info):
        self.handle = handle
        self.media_info = media_info
        self.mime = media_info["mime"]


class FileHandler(MediaHandler):
    def __init__(self, handle, media_info, base_path=None):
        super().__init__(handle, media_info)
        if base_path is None:
            self.path = media_info["full_path"]
        else:
            self.path = os.path.join(base_path, media_info["path"])

    def send_file(self):
        return send_file(self.path)

    def send_thumbnail_square(self, size):
        f = get_thumbnail(self.path, size, square=True, mime=self.mime)
        return send_file(f, self.mime)

    def send_thumbnail_square_cropped(self, size, x1, y1, x2, y2):
        f = get_thumbnail_cropped(
            self.path, size, x1, y1, x2, y2, square=True, mime=self.mime
        )
        return send_file(f, self.mime)
