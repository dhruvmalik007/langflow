from datetime import datetime
from enum import Enum
from langflow.custom import Component
from langflow.io import HandleInput, StrInput

class Gesture:
    def __init__(self, label: str, slug: str, start_frame: int):
        self.label = label
        self.slug = slug
        self.start_frame = start_frame

class AvatarResponse:
    def __init__(self, avatar_id: str, name: str, created_at: datetime, updated_at: datetime, gestures: List[Gesture], status: str, width: int, height: int, thumbnail_url: str, extras: Dict):
class AvatarResponse:
    def __init__(self, avatar_id: str, name: str, created_at: datetime, updated_at: datetime, gestures: list[Gesture], status: str, width: int, height: int, thumbnail_url: str, extras: dict):
        self.created_at = created_at
        self.updated_at = updated_at
        self.gestures = gestures
        self.status = status
        self.width = width
        self.height = height
        self.thumbnail_url = thumbnail_url
        self.extras = extras

class VideoInfo:
    def __init__(self, id: str, name: str, created_at: datetime, updated_at: datetime, status: str, sample_url: str):
        self.id = id
        self.name = name
        self.created_at = created_at
        self.updated_at = updated_at
        self.status = status
        self.sample_url = sample_url

class Zoom:
    def __init__(self, level: int):
        self.level = level

class Moment:
    def __init__(self, transcript: str, avatarId: str, voiceId: str, gestureSlug: str, audioUrl: str, zoom: Zoom):
        self.transcript = transcript
        self.avatarId = avatarId
        self.voiceId = voiceId
        self.gestureSlug = gestureSlug
        self.audioUrl = audioUrl
        self.zoom = zoom

class Subtitles:
    def __init__(self, enable: bool):
        self.enable = enable


class Intensity(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"




class AutoBrolls:

    class AutoBrolls:
        def __init__(self, enable: bool, source: str, intensity: Intensity):
            self.enable = enable
            self.source = source
            self.intensity = intensity

class BackgroundMusic:
    def __init__(self, assetId: str, volume: float):
        self.assetId = assetId
        self.volume = volume

class Moments:
    def __init__(self, name: str, moments: list[Moment], subtitles: Subtitles, aspectRatio: str, enableAutoBrolls: bool, autoBrolls: AutoBrolls, extras: dict, backgroundMusic: BackgroundMusic):
        self.subtitles = subtitles
        self.aspectRatio = aspectRatio
        self.enableAutoBrolls = enableAutoBrolls
        self.autoBrolls = autoBrolls
        self.extras = extras
        self.backgroundMusic = backgroundMusic



class ArgilComponent(Component):
    """Component for creating realistic video avatar using argil.ai platform

        Based on the given text, audio , avatar details and background details, this component generates a video 

    Args:
        Component (Component): Base class for all components.
    Returns:
        Argil component.
    
    NOTE: You should satisfy all the pre-requisites mentioned in the documentation to run this component
    """
    display_name = "Argil"
    description = "Creating realistic video avatar from text and audio using argil.ai platform"
    documentation: str = "https://docs.argil.ai/pages/get-started/quickstart"
    icon = "Argil"

    inputs = [
        StrInput(name="video_name", display_name="Video Name", info="name of the video generated"),
        HandleInput(
            name="moment descriptions",
            display_name="Moments Descriptions",
            input_types=["Moment"],
            is_list=True,
            info="List of moment descriptions"
        )
    ]

    outputs = []


    def build_output(self) -> str:
        ## TODO: implement the build_output method
        pass
