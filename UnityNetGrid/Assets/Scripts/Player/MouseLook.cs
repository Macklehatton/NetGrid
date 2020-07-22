using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MouseLook : MonoBehaviour
{
    [SerializeField]
    private float sensitivity;

    [SerializeField]
    private Transform cameraPivot;

    void Update()
    {
        float inputX = Input.GetAxis("Mouse X") * sensitivity;
        float inputY = Input.GetAxis("Mouse Y") * sensitivity;

        Vector3 horizontalRotation = new Vector3(0.0f, inputX, 0.0f);
        transform.Rotate(horizontalRotation);

        Vector3 verticalRotation = new Vector3(-inputY, 0.0f, 0.0f);
        cameraPivot.Rotate(verticalRotation);
    }
}
